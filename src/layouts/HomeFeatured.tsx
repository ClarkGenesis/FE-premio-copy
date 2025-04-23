import { Link } from "react-router-dom";
import Honda_winnerX from "../assets/photos/motors/hondax.png";
import Honda_ADV_160 from "../assets/photos/motors/hondaa.png";
import Suzuki_Raider_Fi_150 from "../assets/photos/motors/suzuki.png";
import Yamaha_Mio_Gear_125 from "../assets/photos/motors/mio_gear125.png";

function Featured () {
  return (
    <div className="p-6 bg-white text-black">
      <h1 className="text-2xl text-center mb-5">Featured Motorcycles</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {/* Honda WINNER X */}
        <Link to="/login" className="block text-center">
          <img
            src={Honda_winnerX}
            alt="Honda WINNER X"
            className="w-1/2 mx-auto mb-2 rounded-lg border border-black"
          />
          <p className="text-sm font-medium hover:underline">Honda WINNER X</p>
        </Link>

        {/* Honda ADV 160 */}
        <Link to="/login" className="block text-center">
          <img
            src={Honda_ADV_160}
            alt="Honda ADV 160"
            className="w-1/2 mx-auto mb-2 rounded-lg border border-black"
          />
          <p className="text-sm font-medium hover:underline">Honda ADV 160</p>
        </Link>

        {/* Suzuki Raider Fi 150 */}
        <Link to="/login" className="block text-center">
          <img
            src={Suzuki_Raider_Fi_150}
            alt="Suzuki Raider Fi 150"
            className="w-1/2 mx-auto mb-2 rounded-lg border border-black"
          />
          <p className="text-sm font-medium hover:underline">Suzuki Raider Fi 150</p>
        </Link>

        {/* Yamaha Mio Gear 125 */}
        <Link to="/login" className="block text-center">
          <img
            src={Yamaha_Mio_Gear_125}
            alt="Yamaha Mio Gear 125"
            className="w-1/2 mx-auto mb-2 rounded-lg border border-black"
          />
          <p className="text-sm font-medium hover:underline">Yamaha Mio Gear 125</p>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
