import logo from "../assets/Chas-Logo.png";
export default function Header() {
    return (
        <div className="border  w-[100px]">
            <img
                src={logo}
                alt="chas logo"
                className="w-[78px] h-[75px] mt-[23px] ml-[15px]"
            />
        </div>
    );
}
