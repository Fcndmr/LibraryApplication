import { useState } from "react"


function Register() {
    const  [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://localhost:7000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                setMessage("✅ Kayıt başarılı! Giriş yapabilirsiniz.");
                setFormData({ email: "", username: "", password: "" });
            } else {
                setMessage(result.error || "❌ Kayıt başarısız.");
            }
        } catch (error) {
            console.error("Sunucu hatası:", error);
            setMessage("❌ Sunucu hatası. Lütfen tekrar deneyin.");
        }
        setLoading(false);
    };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Kayıt Ol</h2>
                {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Kullanıcı Adı</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Şifre</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-6 ${
                            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                        } text-white font-semibold py-2 px-4 rounded-lg transition duration-300`}
                    >
                        {loading ? "Kaydediliyor..." : "Kayıt Ol"}
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Register
