import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AdminPage: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-amber-600">
            ScentBrothers
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user?.email}</span>
            <button
              onClick={signOut}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Panel de Administración</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfumes</h3>
            <p className="text-gray-600 mb-4">Gestionar catálogo de perfumes</p>
            <button className="text-amber-600 hover:text-amber-700 font-medium">
              Ver perfumes &rarr;
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pedidos</h3>
            <p className="text-gray-600 mb-4">Ver pedidos recibidos</p>
            <button className="text-amber-600 hover:text-amber-700 font-medium">
              Ver pedidos &rarr;
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Usuarios</h3>
            <p className="text-gray-600 mb-4">Gestionar usuarios y roles</p>
            <button className="text-amber-600 hover:text-amber-700 font-medium">
              Ver usuarios &rarr;
            </button>
          </div>
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Bienvenido al panel de administración</h3>
          <p className="text-amber-700">
            Desde aquí podrás gestionar el catálogo de perfumes, ver pedidos y administrar usuarios.
          </p>
        </div>
      </main>
    </div>
  );
};
