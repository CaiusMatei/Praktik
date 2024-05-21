import React, { Component } from 'react';
import ChasLogo from './ChasLogo';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            courses: [
                '.NET22',
                '.NET23',
                '.JS22',
                '.JS23',
                'UX22',
                'UX23',
                // adda fler kurser
            ],
            filteredCourses: [],
        };
    }

    handleLoginRedirect = () => {
        window.location.href = "/login";
    };

    handleSearchInputChange = (event) => {
        const searchInput = event.target.value;
        const filteredCourses = this.state.courses.filter(course =>
            course.toLowerCase().includes(searchInput.toLowerCase())
        );
        this.setState({ searchInput, filteredCourses });
    };

    render() {
        return (
            <div className="bg-inherit flex flex-col flex-wrap gap-4 items-center justify-center px-2 text-black h-full">
                <ChasLogo />

                <form className="flex flex-2 items-center max-w-sm mx-auto">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-transparent border border-slate-50 text-gray-900 text-sm rounded-lg
            focus:ring-blue-100 focus:border-blue-100 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Sök Kurs..."
                            value={this.state.searchInput}
                            onChange={this.handleSearchInputChange}
                            required
                        />
                    </div>
                </form>

                {this.state.filteredCourses.length > 0 && (
                    <ul className="mt-4 w-full max-w-sm mx-auto bg-white rounded-lg shadow-md">
                        {this.state.filteredCourses.map((course, index) => (
                            <li key={index} className="p-2 border-b last:border-none">{course}</li>
                        ))}
                    </ul>
                )}

                <button
                    onClick={this.handleLoginRedirect}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Login for Administrators
                </button>
            </div>
        );
    }
}

export default Home;
