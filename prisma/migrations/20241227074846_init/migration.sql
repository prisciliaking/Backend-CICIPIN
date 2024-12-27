-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profile_picture" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "longtitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "UsersID" INTEGER NOT NULL,

    CONSTRAINT "Restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookmarks" (
    "id" SERIAL NOT NULL,
    "isBookmarked" BOOLEAN NOT NULL,
    "UsersID" INTEGER NOT NULL,
    "RestaurantsID" INTEGER NOT NULL,

    CONSTRAINT "Bookmarks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantImages" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "RestaurantsID" INTEGER NOT NULL,

    CONSTRAINT "RestaurantImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "RestaurantsID" INTEGER NOT NULL,

    CONSTRAINT "Menus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuCategories" (
    "id" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,

    CONSTRAINT "MenuCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuCategoriesPairings" (
    "id" SERIAL NOT NULL,
    "menuID" INTEGER NOT NULL,
    "MenuCategoriesID" INTEGER NOT NULL,

    CONSTRAINT "MenuCategoriesPairings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantCategories" (
    "id" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,

    CONSTRAINT "RestaurantCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantCategoriesPairings" (
    "id" SERIAL NOT NULL,
    "restaurantID" INTEGER NOT NULL,
    "RestaurantCategoriesID" INTEGER NOT NULL,

    CONSTRAINT "RestaurantCategoriesPairings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "review" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "RestaurantsID" INTEGER NOT NULL,
    "ReviewUsersID" INTEGER NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewUsers" (
    "id" SERIAL NOT NULL,
    "ReviewsID" INTEGER NOT NULL,
    "UsersID" INTEGER NOT NULL,

    CONSTRAINT "ReviewUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewsImages" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "ReviewsID" INTEGER NOT NULL,

    CONSTRAINT "ReviewsImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Restaurants" ADD CONSTRAINT "Restaurants_UsersID_fkey" FOREIGN KEY ("UsersID") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_UsersID_fkey" FOREIGN KEY ("UsersID") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_RestaurantsID_fkey" FOREIGN KEY ("RestaurantsID") REFERENCES "Restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantImages" ADD CONSTRAINT "RestaurantImages_RestaurantsID_fkey" FOREIGN KEY ("RestaurantsID") REFERENCES "Restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menus" ADD CONSTRAINT "Menus_RestaurantsID_fkey" FOREIGN KEY ("RestaurantsID") REFERENCES "Restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuCategoriesPairings" ADD CONSTRAINT "MenuCategoriesPairings_menuID_fkey" FOREIGN KEY ("menuID") REFERENCES "Menus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuCategoriesPairings" ADD CONSTRAINT "MenuCategoriesPairings_MenuCategoriesID_fkey" FOREIGN KEY ("MenuCategoriesID") REFERENCES "MenuCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantCategoriesPairings" ADD CONSTRAINT "RestaurantCategoriesPairings_restaurantID_fkey" FOREIGN KEY ("restaurantID") REFERENCES "Restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantCategoriesPairings" ADD CONSTRAINT "RestaurantCategoriesPairings_RestaurantCategoriesID_fkey" FOREIGN KEY ("RestaurantCategoriesID") REFERENCES "RestaurantCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_RestaurantsID_fkey" FOREIGN KEY ("RestaurantsID") REFERENCES "Restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewUsers" ADD CONSTRAINT "ReviewUsers_ReviewsID_fkey" FOREIGN KEY ("ReviewsID") REFERENCES "Reviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewUsers" ADD CONSTRAINT "ReviewUsers_UsersID_fkey" FOREIGN KEY ("UsersID") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewsImages" ADD CONSTRAINT "ReviewsImages_ReviewsID_fkey" FOREIGN KEY ("ReviewsID") REFERENCES "Reviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;
