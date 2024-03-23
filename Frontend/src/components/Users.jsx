export default function Users() {
    return (
        <div>
            <div className="relative overflow-x-auto m-[85px]">
                <h1 className="w-[224px] ">Användar lista</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Namn
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Efternamn
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mail
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Användernamen
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Noa
                            </th>
                            <td className="px-6 py-4">Eklund</td>
                            <td className="px-6 py-4">Noaeklund@gmail.com</td>
                            <td className="px-6 py-4">NoaEk</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Alex
                            </th>
                            <td className="px-6 py-4">Ibrahimovic</td>
                            <td className="px-6 py-4">
                                AlexIbrahimovic@gmail.com
                            </td>
                            <td className="px-6 py-4">Alex.ic</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Gabriela
                            </th>
                            <td className="px-6 py-4">Nordström</td>
                            <td className="px-6 py-4">
                                Gabrielanordstrm@gmail.com
                            </td>
                            <td className="px-6 py-4">Gabstr</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Rafael
                            </th>
                            <td className="px-6 py-4">Charles</td>
                            <td className="px-6 py-4">
                                Rafaelcharles14@gmail.com
                            </td>
                            <td className="px-6 py-4">Raf123</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Lucas
                            </th>
                            <td className="px-6 py-4">Penchas</td>
                            <td className="px-6 py-4">
                                Lucaspenchas@gmail.com
                            </td>
                            <td className="px-6 py-4">Lucaspenchas</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Amadeus
                            </th>
                            <td className="px-6 py-4">Rodriguez</td>
                            <td className="px-6 py-4">Amadeus@gmail.com</td>
                            <td className="px-6 py-4">Amrodiguez</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Isabela
                            </th>
                            <td className="px-6 py-4">Aleesandro</td>
                            <td className="px-6 py-4">Aleesandro@gmail.com</td>
                            <td className="px-6 py-4">Isabela717</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Amanda
                            </th>
                            <td className="px-6 py-4">Bylund</td>
                            <td className="px-6 py-4">
                            Amanda.by@gmail.com
                            </td>
                            <td className="px-6 py-4">AmandaB</td>
                        </tr>
                    </tbody>
                </table>
                <button>Ta bort konto</button>
            </div>
        </div>
    );
}
