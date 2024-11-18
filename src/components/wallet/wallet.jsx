import { AlertCircle, Wallet } from 'lucide-react';
import { useState } from 'react';

const ConnectWallet = ({ onConnect }) => {
    const [isConnecting, setIsConnecting] = useState(false)
    const [error, setError] = useState(null)

    const connectWallet = async () => {
        setIsConnecting(true)
        setError(null)

        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                onConnect(accounts[0])
            } catch (err) {
                setError('Failed to connect wallet. Please try again.')
                console.error('Failed to connect wallet:', err)
            }
        } else {
            setError('MetaMask is not installed. Please install it to connect your wallet.')
        }

        setIsConnecting(false)
    }

    return (
        <div>
            <button
                onClick={connectWallet}
                disabled={isConnecting}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
                <Wallet className="mr-2" />
                {isConnecting ? 'Connecting...' : 'Connect Wallet'}
            </button>
            {error && (
                <div className="mt-2 text-red-500 flex items-center">
                    <AlertCircle className="mr-1" />
                    {error}
                </div>
            )}
        </div>
    )
}

export default ConnectWallet;
