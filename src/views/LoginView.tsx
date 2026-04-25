import { Link } from "react-router-dom";

export default function LoginView() {
    return (
        <>
            <div className="text-2xl">LoginView</div>

            <nav>
                <Link to="/auth/register" className="text-blue-500">
                    No tienes una cuenta? Registrate aquí.
                </Link>
            </nav>
        </>
    )
}
