# Backend Application

## 🔐 Enviroment Variables

To run this application locally correctly, you need to provide the following variables to your .env file

Database configuration
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_HOST`
- `DB_PORT`

Back-end configuration
- `SERVER_PORT`

JSON Web Token configuration
- `JWT_SECRET` (Any secure string)

Other configurations
- `SENDGRID_API_KEY`
- `CLOUDINARY_URL`

## 🌐 Users credentials

You can either register using the front-end application or use the following user credentials. 

<div align="center">
  <table>
  <thead>
    <tr>
      <td colspan="3" align="center">Administrators</td>
    </tr>
    <tr>
      <td>#</td>
      <td width="300"><strong>Email</strong></td>
      <td width="300" ><strong>Password</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
      <td>mconde@test.com</td>
      <td>Sc4M3urV</td>
    </tr>
    <tr>
    <td>2</td>
      <td>acastrillon@test.com</td>
      <td>w5G36s62</td>
    </tr>
    <tr>
    <td>3</td>
      <td>sherrera@test.com</td>
      <td>p5Z8cRdn</td>
    </tr>
     <tr>
     <td>4</td>
      <td>csallent@test.com</td>
      <td>4EXdZYpf</td>
    </tr>
    <tr>
    <td>5</td>
      <td>bmedina@test.com</td>
      <td>aX7G4Ubm</td>
    </tr>
    <tr>
    <td>6</td>
      <td>hpascual@test.com</td>
      <td>kD8ARLyy</td>
    </tr>
     <tr>
     <td>7</td>
      <td>asantos@test.com</td>
      <td>7zMCjnZ2</td>
    </tr>
     <tr>
     <td>8</td>
      <td>mcozzetti@test.com</td>
      <td>fMhztP7C</td>
    </tr>
    <tr>
    <td>9</td>
      <td>rmarquez@test.com</td>
      <td>8ppcVfgU</td>
    </tr>
    <tr>
    <td>10</td>
      <td>ediaz@test.com</td>
      <td>guVW4U9v</td>
    </tr>
  </tbody> 
</table>

<table>
  <thead>
    <tr>
      <td colspan="3" align="center">Regular Users</td>
    </tr>
    <tr>
      <td>#</td>
      <td width="300"><strong>Email</strong></td>
      <td width="300" ><strong>Password</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>rromero@test.com</td>
      <td>KK9FVd4P</td>
    </tr>
    <tr>
      <td>2</td>
      <td>msaez@test.com</td>
      <td>GXAwpx9W</td>
    </tr>
    <tr>
      <td>3</td>
      <td>agimenez@test.comm</td>
      <td>LDEvQ88q</td>
    </tr>
     <tr>
      <td>1</td>
      <td>dduran@test.com</td>
      <td>pvfz8GCE</td>
    </tr>
    <tr>
      <td>4</td>
      <td>bmedina@test.com</td>
      <td>aX7G4Ubm</td>
    </tr>
    <tr>
      <td>5</td>
      <td>apandolfini@test.com</td>
      <td>Snm76VSJ</td>
    </tr>
     <tr>
     <td>6</td>
      <td>msosa@test.com</td>
      <td>5V9SCsbd</td>
    </tr>
     <tr>
      <td>7</td>
      <td>pgallardo@test.com</td>
      <td>kMkt5cGL</td>
    </tr>
    <tr>
      <td>8</td>
      <td>tvega@test.com</td>
      <td>zUqqb87h</td>
    </tr>
    <tr>
      <td>9</td>
      <td>jaguilar@test.com</td>
      <td>t72ZP8wu</td>
    </tr>
     <tr>
      <td>10</td>
      <td>ocabrera@test.com</td>
      <td>uvqkN4ZD</td>
    </tr>
  </tbody> 
</table>
</div>

## 🧪 Running Tests

Here are the available endpoints tests. To run the tests, run its command

Activities Endpoint 
```bash
npm run test:activities
```
Auth Endpoint 
```bash
npm run test:auth
```
Contacts Endpoint 
```bash
npm run test:contacts
```
Members Endpoint 
```bash
npm run test:members
```
News Endpoint 
```bash
npm run test:news
```
Sendgrid Endpoint 
```bash
npm run test:sendgrid
```

## 🛠 Dependencies and Engines

Dependencies
- @sendgrid/mail "^7.7.0"
- bcryptjs: "^2.4.3"
- cloudinary: "^1.30.0"
- cors: "^2.8.5"
- dotenv: "^8.2.0"
- express-fileupload: "^1.4.0"
- express-validator: "^6.14.0"
- jsonwebtoken: "^8.5.1"
- morgan: "~1.9.1"
- nodemon: "^2.0.16"
- supertest: "^6.2.3"

Dev dependencies
- jest: "^28.1.1"
- sequelize-cli: "^6.2.0"
- supertest: "^6.2.3"

Engines
- express: "~4.16.1"
- sequelize: "^6.3.5"
- mysql2: "^2.2.3"

## 👨‍💻 Authors

- [@sergioriv2](https://www.github.com/sergioriv2)
- [@m-torre](https://www.github.com/m-torre)
- [@EnriHeller](https://www.github.com/EnriHeller)
- [@felimichalski](https://www.github.com/felimichalski)
- [@edgardo90](https://www.github.com/edgardo90)
- [@BrunoPierca](https://www.github.com/BrunoPierca)

## 📢 Feedback
If you have any feedback, feel free to send me a message at my [email](mailto:sergiorive02@gmail.com)
