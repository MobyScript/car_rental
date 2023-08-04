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

-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pricePerDay" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "rentalCarId" INTEGER,
    "discountedPrice" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Car_rentalCarId_fkey" FOREIGN KEY ("rentalCarId") REFERENCES "RentalCar" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
