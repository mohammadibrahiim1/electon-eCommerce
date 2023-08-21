import { Text } from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const DisplayCategories = () => {
  const [isComputerAndAccessories, setIsComputerAndAccessories] = useState(false);
  const [isWomenFashion, setIsWomenFashion] = useState(false);
  const [isMenFashion, setIsMenFashion] = useState(false);
  const [isAutoAndMotorcycle, setIsAutoAndMotorcycle] = useState(false);

  const toggleAutoAndMotorcyle = () => {
    setIsAutoAndMotorcycle(!isAutoAndMotorcycle);
  };
  const toggleWomenFashion = () => {
    setIsWomenFashion(!isWomenFashion);
  };
  const toggleMenFashion = () => {
    setIsMenFashion(!isMenFashion);
  };

  const toggleComputerAndAccessoriesSubMenu = () => {
    setIsComputerAndAccessories(!isComputerAndAccessories);
  };
  return (
    <div>
      <div>
        <div className="border">
          <div>
            <Text
              onClick={toggleComputerAndAccessoriesSubMenu}
              className="block px-4  py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer border-b "
              role="menuitem"
            >
              Computer & Accessories
            </Text>

            {isComputerAndAccessories && (
              <div className="absolute  w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 3
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div>
            <Text
              onClick={toggleWomenFashion}
              className="block border-b px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Women Clothing & Fashion
            </Text>
            {isWomenFashion && (
              <div className="absolute  w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 3
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div>
            <Text
              onClick={toggleMenFashion}
              className="block border-b px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Men Clothing & Fashion
            </Text>
            {isMenFashion && (
              <div className="absolute  w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 3
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div>
            <Text
              onClick={toggleAutoAndMotorcyle}
              className="block border-b px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Automobile & Motorcycle
            </Text>
            {isAutoAndMotorcycle && (
              <div className="absolute  w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 3
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="block border-b px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
            <Text> Skincare</Text>
          </div>
          <div className="block border-b px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
            <Text> Fragrances</Text>
          </div>
          <div className="block border-b px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
            <Text> Sunglasses</Text>
          </div>
          <div className="block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
            <Text> Lighting</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCategories;
