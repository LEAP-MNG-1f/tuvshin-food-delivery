"use client";

import PineconeIcon from "../svg/PineconeIcon";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Header = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div className="flex items-center gap-5">
          <div>
            <PineconeIcon />
          </div>
          <div>
            <h3 className="p-4 text-sm font-bold text-[#000] btn">НҮҮР</h3>
          </div>
          <div>
            <h3 className="p-4 text-sm font-bold text-[#000]">ХООЛНЫ ЦЭС</h3>
          </div>
          <div>
            <h3 className="p-4 text-sm font-bold text-[#000]">
              ХҮРГЭЛТИЙН БҮС
            </h3>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center p-4">
            <div>
              <LocalGroceryStoreIcon />
            </div>
            <div>
              <h3 className="p-4 text-sm font-bold text-[#000]">Сагс</h3>
            </div>
          </div>
          <div className="flex items-center p-4">
            <div>
              <PermIdentityIcon fontSize="medium" />
            </div>
            <div>
              <h3 className="p-4 text-sm font-bold text-[#000]">Нэвтрэх</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
