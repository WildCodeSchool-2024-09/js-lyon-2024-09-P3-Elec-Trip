import { createContext, useContext, useState } from "react";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

import type { ReactNode } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

export type User = {
  id: number;
  name: string;
  email: string;
  firstname: string;
  lastname: string;
};

export type Auth = {
  user: User;
  token: string;
};

interface AuthContextValue {
  auth: Auth | null;
  login: (user: Auth) => void;
  logout: () => void;
}

// Initialiser le contexte avec des valeurs par défaut
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Fournisseur du contexte d'authentification
export function AuthProvider({ children }: ContextProviderProps) {
  const [auth, setAuth] = useState(null as Auth | null);

  // Création de compte
  // Rien ici tout se passe dans Account.tsx

  // Connexion au compte
  const login = useCallback(
    (user: Auth) => {
      if (auth !== null) {
        toast.error("Vous êtes déjà connecté");
        return;
      }
      setAuth(user);
      toast.success(`Bonjour ${user.user.firstname} ! 😊`);
    },
    [auth],
  );
  // Déconnexion
  const logout = useCallback(() => {
    if (auth !== null) {
      toast.info(`À bientôt ${auth.user.firstname}`);
      setAuth(null);
    }
  }, [auth]);

  const memo = useMemo(() => ({ auth, login, logout }), [auth, login, logout]);

  return <AuthContext.Provider value={memo}>{children}</AuthContext.Provider>;
}

// Hook personnalisé pour utiliser le contexte
export function useAuth() {
  const value = useContext(AuthContext);
  if (value == null) {
    throw new Error("useAuth doit être utilisé dans un <AuthProvider>");
  }
  return value;
}
