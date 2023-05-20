# A nodejs API make for my university project
This project was built during my final year. We planned to use an android application from where student can check his attendance throughout specific month. In this i have built this api to get the student data.

### How to start this project
1. Rename the **.env_sample** file named to **.env** 
2. Set the `CONN_STRING` to your database url, inside the **.env** file
    ```Javascript
    CONN_STRING = YOUR_DATABASE_CONNECTION_STRING
    ```
3. **_Also check the sql statements and table names might be different in case of yours_**
   
4. Chose any of the hosting platform (heroku/glitch/railway/digitalocean), before deployement make 
necessary changes according to platform

[Android Application Attendance Report Viewer](https://github.com/y9rabbito/Attendance-Report-Viewer "Attendance Report Viewer") Here is our Android Application link.

You can get the API Here [Railway API]("attendanceapi-production.up.railway.app "Railway API"), after the url add your table name and other credentials like _attendanceapi-production.up.railway.app/attendance/1/05/23_, like this request will give a json response of student id 1, in the month of May(05),2023

**Note that unless the server is running you can't get the data in application as well as response header**
