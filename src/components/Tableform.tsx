import {
    AccountCircle,
    ArrowBack,
    InsertDriveFile,
    Lock,
    Logout,
  } from "@mui/icons-material";
import Background from "./Background";
import TableList from "./TableList";

function Tableform() {
  return (
    <div className=" px-2 pb-5 text-white  bg-[#1B4A68] min-h-fit w-screen relative z-50">
    <div className="w-full text-xs flex items-center justify-between py-1 font-bold z-50">
      <div className="flex items-center gap-6">
        <span className="uppercase flex items-center gap-1">
          <span className="bg-white rounded-full z-50">
            <ArrowBack className="text-teal-400" />
          </span>
          <span className="hidden md:block z-50">Next science</span>
        </span>
        <span className="flex items-center gap-1 z-50">
          <AccountCircle />
          <span className="underline hidden md:block z-50">Erica Fernandes</span>
        </span>
        <span className="hidden md:flex items-center gap-1 z-50  ">
          OCR Status:
          <input
            type="search"
            className="w rounded-full outline-none px-2 py-1.5 text-black "
          />
        </span>
      </div>
      <div>
        <span className="uppercase text-[#FE7D00] text-sm font-bold z-50">
          Fax list
        </span>
      </div>
      <div className="flex items-center gap-5">
        <span className="text-[#FE7D00] flex items-center z-50 ">
          <Lock />
          <span className="hidden md:block z-50">Fax List</span>
        </span>
        <span className="flex items-center z-50">
          <InsertDriveFile />
          <span className="hidden md:block z-50"> Rx Tracker List</span>
        </span>
        <span className="flex items-center z-50">
          <InsertDriveFile />
          <span className="hidden md:block z-50"> Case Details</span>
        </span>
        <span className="flex items-center gap-1 z-50">
          <Logout />
          <span className="hidden md:block z-50" > Logout</span>
        </span>
        <span className="hidden text-[#FE7D00] text-lg md:hidden lg:flex flex-col items-center leading-[4px] z-50 ">
          <h3 className="text-3xl z-50">
            Tika<span className="text-blue-500 z-50">Rx</span>
          </h3>
          <p className="text-[8px] text-white z-50">Rx Management System</p>
        </span>
      </div>
    </div>

    {/* mobile input */}
    <div className="md:hidden text-center p-2 z-50">
      <input
        type="search"
        className=" rounded-full bg-white outline-none px-2 py-1.5 text-black z-50"
      />
    </div>
    <Background />
    <TableList/>
  </div>
  )
}

export default Tableform