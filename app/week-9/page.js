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
        <div style={style.container}>
            <div style={style.contentWrapper}>
                {/* Back button at the top */}
                <div style={style.backButtonContainer}>
                    <Link href="/" style={style.backButton}>
                        &larr; Back to Home
                    </Link>
                </div>
                
                <h1 style={style.heading}>Shopping List App</h1>
                
                {loading ? (
                    <p style={style.placeholderText}>Loading...</p>
                ) : user ? (
                    <div style={style.contentSection}>
                        <p style={style.userWelcome}>
                            Welcome, {user.displayName || "User"} ({user.email})
                        </p>
                        
                        <div style={style.buttonContainer}>
                            <Link 
                                href="/week-9/shopping-list" 
                                style={style.primaryButton}
                            >
                                Go to Shopping List
                            </Link>
                            
                            <button
                                onClick={handleSignOut}
                                style={style.dangerButton}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <div style={style.contentSection}>
                        <p style={style.placeholderText}>
                            Please sign in to access the shopping list
                        </p>
                        <button
                            onClick={handleSignIn}
                            style={style.successButton}
                        >
                            Sign in with GitHub
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem 1rem',
        backgroundImage: 'url(https://cdn.wallpapersafari.com/63/84/mJg9fA.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    contentWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '10px',
        padding: '2rem',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        border: '2px solid #FFD700',
        position: 'relative',
    },
    backButtonContainer: {
        position: 'absolute',
        top: '1rem',
        left: '1rem',
    },
    backButton: {
        color: '#FFD700',
        fontSize: '1rem',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        transition: 'color 0.2s',
        fontWeight: 'bold',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: '#FFD700',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    },
    contentSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    userWelcome: {
        color: '#FFD700',
        textAlign: 'center',
        fontSize: '1.2rem',
    },
    placeholderText: {
        color: '#FFD700',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    primaryButton: {
        padding: '0.75rem 1rem',
        backgroundColor: '#3B82F6',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'block',
        transition: 'background-color 0.2s',
    },
    dangerButton: {
        padding: '0.75rem 1rem',
        backgroundColor: '#DC2626',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    successButton: {
        padding: '0.75rem 1rem',
        backgroundColor: '#10B981',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};