import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AdminPage: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <nav style={{ background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px', color: '#1a1a1a', textDecoration: 'none' }}>
            SCENT BROTHERS
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#666' }}>{user?.email}</span>
            <button
              onClick={signOut}
              style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: '#1a1a1a' }}>Panel de Administración</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#1a1a1a' }}>Perfumes</h3>
            <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>Gestionar catálogo de perfumes</p>
            <button style={{ background: 'none', border: 'none', color: '#9f8e7d', fontWeight: 500, cursor: 'pointer' }}>
              Ver perfumes →
            </button>
          </div>

          <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#1a1a1a' }}>Pedidos</h3>
            <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>Ver pedidos recibidos</p>
            <button style={{ background: 'none', border: 'none', color: '#9f8e7d', fontWeight: 500, cursor: 'pointer' }}>
              Ver pedidos →
            </button>
          </div>

          <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#1a1a1a' }}>Usuarios</h3>
            <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>Gestionar usuarios y roles</p>
            <button style={{ background: 'none', border: 'none', color: '#9f8e7d', fontWeight: 500, cursor: 'pointer' }}>
              Ver usuarios →
            </button>
          </div>
        </div>

        <div style={{ marginTop: '2rem', background: '#faf6f3', border: '1px solid #e8e0d8', borderRadius: '10px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#5d4e3a' }}>Bienvenido al panel de administración</h3>
          <p style={{ color: '#6b5a4a', fontSize: '0.95rem' }}>
            Desde aquí podrás gestionar el catálogo de perfumes, ver pedidos y administrar usuarios.
          </p>
        </div>
      </main>
    </div>
  );
};
