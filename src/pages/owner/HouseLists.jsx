


const HouseLists = () => {
    return (
        <div className="bg-white px-5 py-5 rounded">
            <div>
                <table className="w-full  border-collapse">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>House</td>
                            <td>City</td>
                            <td>Status</td>
                            <td className="w-[100px]">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>New yourk city house</td>
                            <td>New Your</td>
                            <td>Public</td>
                            <td>
                                <div className="flex gap-3 items-center">
                                    <button className="px-2 py-1 inline-block bg-purple-600 text-white rounded">
                                        Edit
                                    </button>
                                    <button className="px-2 py-1 inline-block bg-primary text-white rounded">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HouseLists;