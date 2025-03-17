import { useState, useEffect } from "react";
import Login from "../components/Account/Login";
import Register from "../components/Account/Register";

function AccountPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        window.location.reload(); 
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          {user ? (
              <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-800">Merhaba, {user.username}!</h2>
                  <button
                      onClick={handleLogout}
                      className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                      Çıkış Yap
                  </button>
              </div>
          ) : (
              <>
                  <Login onLogin={setUser} />
                  <Register />
              </>
          )}
      </div>
  </div>
    );
}

export default AccountPage;
