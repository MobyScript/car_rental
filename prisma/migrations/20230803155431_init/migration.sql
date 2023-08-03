-- CreateTable
CREATE TABLE "RentalCar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numberOfDays" INTEGER NOT NULL,
    "numberOfCars" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "companyName" TEXT
);
