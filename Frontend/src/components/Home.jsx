import logo2 from "../assets/Chas-Logo2.png";
import Login from "./Login";
export default function Home() {
    const linearGradientStyle = {
        backgroundImage:
            "linear-gradient(37deg, #141414 -53.74%, rgba(121, 121, 121, 0.59) 63.79%, rgba(255, 255, 255, 0) 146.9%)",
    };
    return (
        <div className="flex items-center ">
            <div
                className="  bg-no-repeat bg-cover w-[658px] h-[678px] ml-[59px] rounded-[12px] my-[56px]"
                style={{ backgroundImage: `url(${logo2})` }}
            >
                <div
                    className="rounded-[12px]  h-full  flex justify-center "
                    style={linearGradientStyle}
                >
                    <p className="w-[610px] h-[139px] m-[24px] mt-[471px] font-[700] text-[16px] leading-[27px] text-white ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
            <Login />
        </div>
    );
}
