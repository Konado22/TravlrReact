export default function Login() {
    return (
        <div className=" flex-col grid justify-center space-y-5">
            <h1 className="text-9xl text-orange-700">Login Page</h1>
            <div className="space-y-4">
                <div className="flex justify-center">
                    <input className="fill-slate-400 " type="email" placeholder="username"></input>
                </div>
                    <div className="flex justify-center">
                        <input className='fill-slate-400 ' type="password" placeholder="password"></input>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-orange-700 text-2xl justify-center bg-blue-500 rounded-md hover:text-white" type="submit">Login</button>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-orange-700 hover:underline">New user?Register here</h1>
                    </div>
                    <div className="flex justify-center">
                        <img src="/back.jpg" />
                    </div>
            </div>
        </div>
    );
}