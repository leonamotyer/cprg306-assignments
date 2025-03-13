'use client';
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useState } from "react";
 
export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [loading, setLoading] = useState(false);

    async function handleSignIn() {
        try {
            setLoading(true);
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in:", error);
        } finally {
            setLoading(false);
        }
    }

    async function handleSignOut() {
        try {
            setLoading(true);
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        } finally {
            setLoading(false);
        }
    }
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">Shopping List App</h1>
                
                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : user ? (
                    <div className="space-y-4">
                        <p className="text-center">
                            Welcome, {user.displayName || "User"} ({user.email})
                        </p>
                        
                        <div className="flex flex-col space-y-4">
                            <Link 
                                href="/week-9/shopping-list" 
                                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-center"
                            >
                                Go to Shopping List
                            </Link>
                            
                            <button
                                onClick={handleSignOut}
                                className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <p className="text-center">
                            Please sign in to access the shopping list
                        </p>
                        <button
                            onClick={handleSignIn}
                            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded"
                        >
                            Sign in with GitHub
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}