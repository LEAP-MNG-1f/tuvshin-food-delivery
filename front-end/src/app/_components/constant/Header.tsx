"use client";

import PineconeIcon from "../svg/PineconeIcon";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Link from "next/link";
import AnchorTemporaryDrawer from "./AnchorTemporaryDrawer";

const Header = () => {
  return (
    <div className="px-4 py-2 bg-white">
      <div className="flex justify-between items-center md:justify-around">
        {/* Left section */}
        <div className="flex items-center gap-5">
          <div>
            <PineconeIcon />
          </div>
          <div>
            <Link href="/">
              <h3 className="p-4 text-sm font-bold text-[#000]">НҮҮР</h3>
            </Link>
          </div>
          <div>
            <Link href="menupage">
              <h3 className="p-4 text-sm font-bold text-[#000]">ХООЛНЫ ЦЭС</h3>
            </Link>
          </div>
          <div>
            <Link href="/location">
              <h3 className="p-4 text-sm font-bold text-[#000]">
                ХҮРГЭЛТИЙН БҮС
              </h3>
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-5">
          <div className="flex items-center p-4">
            <LocalGroceryStoreIcon />
            <div>
              <AnchorTemporaryDrawer />
            </div>
          </div>
          <div className="flex items-center p-4">
            <PermIdentityIcon fontSize="medium" />
            <div>
              <h3 className="p-4 text-sm font-bold text-[#000]">Нэвтрэх</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden">{/* You can add a mobile menu here */}</div>
    </div>
  );
};

export default Header;
