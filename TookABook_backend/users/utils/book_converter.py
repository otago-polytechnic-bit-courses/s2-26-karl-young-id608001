import fitz
import zipfile
from pathlib import Path
from django.conf import settings

def get_book_pages(book):
    if book.file_type == "pdf":
        return convert_pdf_to_images(book)

    if book.file_type == "cbz":
        return extract_cbz_pages(book)

    raise ValueError(
        f"{book.file_type} not supported"
    )

#  converting the PDFs to images to read
def convert_pdf_to_images(book):
    output_dir = (
        Path(settings.MEDIA_ROOT)
        / "pages"
        / f"book_{book.id}"
    )

    output_dir.mkdir(
        parents=True,
        exist_ok=True,
    )

    # Cache Check
    existing_pages = sorted(
        output_dir.glob("page_*.png")
    )

    # Check if the book has already been converted
    if existing_pages:
        return [
            f"{settings.MEDIA_URL}"
            f"pages/book_{book.id}/{page.name}"
            for page in existing_pages
        ]

    document = fitz.open(book.file.path)

    pages = []

    for page_number in range(document.page_count):
        page = document.load_page(page_number)

        # Render the page
        # larger matrix for better quality
        pixmap = page.get_pixmap(
            matrix=fitz.Matrix(4, 4) 
        )

        #  Store the pages with padding
        filename = (
            f"page_{page_number + 1:04d}.png"
        )

        filepath = output_dir / filename

        pixmap.save(str(filepath))

        pages.append(
            f"{settings.MEDIA_URL}"
            f"pages/book_{book.id}/{filename}"
        )

    document.close()

    return pages


# Convert CBZ to images
def extract_cbz_pages(book):
    output_dir = (
        Path(settings.MEDIA_ROOT)
        / "pages"
        / f"book_{book.id}"
    )

    output_dir.mkdir(
        parents=True,
        exist_ok=True,
    )

    complete_marker = (
        output_dir / ".complete"
    )

    existing_pages = sorted(
        [
            file
            for file in output_dir.iterdir()
            if file.is_file()
            and file.suffix.lower()
            in [".jpg", ".jpeg", ".png", ".webp"]
        ]
    )

    # Cache check 
    if (
        complete_marker.exists()
        and existing_pages
    ):
        return [
            f"{settings.MEDIA_URL}"
            f"pages/book_{book.id}/{page.name}"
            for page in existing_pages
        ]

    # Extract the CBZ file
    try:
        with zipfile.ZipFile(
            book.file.path,
            "r",
        ) as archive:
            archive.extractall(
                output_dir
            )
    except Exception as error:
        raise ValueError(
            "Unable to read CBZ file."
        ) from error

    # Image files only
    pages = sorted(
        [
            file
            for file in output_dir.iterdir()
            if file.is_file()
            and file.suffix.lower()
            in [
                ".jpg",
                ".jpeg",
                ".png",
                ".webp",
            ]
        ]
    )

    # MARK CACHE COMPLETE
    complete_marker.touch()

    return [
        f"{settings.MEDIA_URL}"
        f"pages/book_{book.id}/{page.name}"
        for page in pages
    ]