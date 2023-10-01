import { data } from "../Data/Data";

const TableList = () => {
  return (
    <div className=" w-[calc(100%-2px)] bg-white p-2 rounded-2xl overflow-x-scroll  z-50">
      <table className="w-full text-sm text-center table-auto">
        <thead className="">
          <tr className="text-sm text-[#2b5b7a] font-bold bg-[#a3d3ffa4] rounded-2xl">
            <th className="px-6 py-3">Fax ID</th>
            <th className="px-6 py-3">Case ID</th>
            <th className="px-6 py-3">Fax Status</th>
            <th className="px-6 py-3">Verified</th>
            <th className="px-6 py-3">Main Fax ID</th>
            <th className="px-6 py-3">fax Date</th>
            <th className="px-6 py-3">Fax Time</th>
            <th className="px-6 py-3 ">Sender Fax #</th>
            <th className="px-6 py-3 ">OCR Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "" : "bg-[#e2e2e2]"
              } bg-white text-black/70 text-xs`}
            >
              <td className="px-6 py-4 text-[#2683c2] underline font-medium whitespace-nowrap">
                {item.Fax_ID}
              </td>
              <td className="px-6 py-4">{item.Case_ID}</td>
              <td className="px-6 py-4">{item.Fax_Status}</td>
              <td className="px-6 py-4">{item.Verified}</td>
              <td className="px-6 py-4">{item.Main_Fax_ID}</td>
              <td className="px-6 py-4">{item.fax_Date}</td>
              <td className="px-6 py-4">{item.Fax_Time}</td>
              <td className="px-6 py-4">{item.Sender_Fax}</td>
              <td className="px-6 py-4">{item.OCR_Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;