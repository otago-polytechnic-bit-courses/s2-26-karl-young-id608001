# FitTrack App Documentation

## **Overview**
This document explains how to run the FitTrack Django API and React Native app on any machine, including how to configure the LAN IP, environment variables, CORS, and how to verify the API is reachable before running the app.

This prevents the most common issue: the mobile device cannot reach the API.

---

## **Requirements**
- Python 3  
- Django  
- Expo CLI  
- A phone or device on the same Wi‑Fi network 
- Ability to edit `.env` files  

---

## **How To Find Your LAN IP Address**
Your LAN IP is the address other devices use to reach your Django server.

### **Windows**
Run from a terminal (Command Prompt or PowerShell):
```
ipconfig
```
Look for:
```
IPv4 Address . . . . . . . : 192.168.x.x
```

### **macOS / Linux**
Run from a terminal:
```
ifconfig
```
Look for:
```
inet 192.168.x.x
```
This is your LAN IP.  
You will use it in both Django and Expo.

---


### **Backend Environment Variables**
Create a .env file in the Django project root:

```
DJANGO_SECRET_KEY=your_new_rotated_secret_key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1,<YOUR LAN IP>
DJANGO_CORS_ALLOWED_ORIGINS=http://<YOUR LAN IP>:19000,http://<YOUR LAN IP>:19001
```

Explanation:

DJANGO_SECRET_KEY — required or Django will crash
DJANGO_DEBUG — allows local debugging
DJANGO_ALLOWED_HOSTS — must include your LAN IP or Django will reject requests
DJANGO_CORS_ALLOWED_ORIGINS — must include Expo’s ports or your app cannot call the API

---

## **Install Backend Dependencies**
From the Django project directory, run:
```
pip install django-environ djangorestframework djangorestframework-simplejwt django-cors-headers
```

---

## **Configure Django for LAN Access**
### Run Django so other devices can reach it
From the Django project directory, run:
```
python manage.py runserver 0.0.0.0:8000
```
This makes Django listen on all network interfaces so devices on the same Wi‑Fi network can access it.

---


## **Test API Reachability (Required)**
Before running the app, confirm the API is reachable from your device.

Run this from your phone or emulator (Termux, iSH, or Android shell):
```
curl http://<YOUR LAN IP>:8000/api/token/
```

Expected output:
```
{"detail":"Method \"GET\" not allowed."}
```

If this fails:
- Django is not running  
- Wrong LAN IP  
- Firewall blocking access  
- Wrong port  

This test isolates network issues from app issues.

---

## **Install Frontend Dependencies**
Run (from the `fittrack-app-06` directory):
```
npm install
```

---

## **Frontend Environment Variables**
Open your `.env` file and set:
```
EXPO_PUBLIC_API_URL=http://<YOUR LAN IP here>:8000
```
Example:
```
EXPO_PUBLIC_API_URL=http://192.168.1.23:8000
```

---

## **Run the Expo App**
Start Expo from the frontend project folder:
```
npm run start
```

Make sure your phone / device has the Expo Go app installed.

Then:
- Connect your phone to the **same Wi‑Fi**  
- Scan the QR code  
- The app will use `EXPO_PUBLIC_API_URL`  
- Confirm login works  
- Confirm the studio list loads  

---

## **Troubleshooting**
### **App cannot log in**
- Check `curl` again  
- Check Django is running on `0.0.0.0:8000`  
- Check `.env` is correct  
- Check Expo restarted after editing `.env`  
- Check DJANGO_CORS_ALLOWED_ORIGINS match your LAN IP  

### **Studio list empty**
- API reachable but token invalid  
- Check refresh token logic  
- Check Django data  

---

## **Summary**
To run this project on any machine:

1. Find LAN IP  
2. Put it in `EXPO_PUBLIC_API_URL`  
3. Run Django with `0.0.0.0:8000`  
4. Install dependencies for backend and frontend  
5. Test with `curl`  
6. Run Expo  
7. Confirm login + studio list  

Following these steps ensures the app works on any device on the same network.

---
