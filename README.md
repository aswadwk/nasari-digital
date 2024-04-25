# How to run Locally

1. Clone the repository
2. Run the following command in the terminal
```bash
composer install
```
3. Create a database in your local server
4. Copy the .env.example file and rename it to .env
5. Update the database credentials in the .env file
6. Run the following command in the terminal
```bash
php artisan key:generate
```
7. Run the following command in the terminal
```bash
php artisan migrate
```
8. Run database seeders
```bash
php artisan db:seed
```
9. Run the following command in the terminal
```bash
php artisan serve
```
10. Run the following command in the terminal
```bash
pnpm install
```
11. Run the following command in the terminal
```bash
pnpm run dev
```
12. Open the browser and go to the following URL
```bash
http://localhost:8000
```
13. You can login with the following credentials
```bash
email:test@example.com
password:password
```
