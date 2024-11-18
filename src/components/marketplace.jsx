import { Menu, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ConnectWallet from './wallet/wallet';

const nfts = [
    { id: 1, name: 'Abstract Artwork', creator: 'Artist One', price: '0.5 ETH', image: '/placeholder.svg?height=400&width=400' },
    { id: 2, name: 'Digital Landscape', creator: 'Artist Two', price: '0.7 ETH', image: '/placeholder.svg?height=400&width=400' },
    { id: 3, name: 'Crypto Punk', creator: 'Artist Three', price: '1.2 ETH', image: '/placeholder.svg?height=400&width=400' },
    { id: 4, name: 'Virtual Reality', creator: 'Artist Four', price: '0.9 ETH', image: '/placeholder.svg?height=400&width=400' },
    { id: 5, name: 'Futuristic City', creator: 'Artist Five', price: '1.5 ETH', image: '/placeholder.svg?height=400&width=400' },
    { id: 6, name: 'Space Exploration', creator: 'Artist Six', price: '0.8 ETH', image: '/placeholder.svg?height=400&width=400' },
]

export default function NFTMarketplace() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [walletAddress, setWalletAddress] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleConnect = (address) => {
        setWalletAddress(address)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">NFT Nexus</h1>
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-gray-300 hover:text-white transition duration-300">Explore</a>
                        <a href="#" className="text-gray-300 hover:text-white transition duration-300">Create</a>
                        {walletAddress ? (
                            <div className="font-mono bg-gray-700 px-3 py-1 rounded-full text-sm">
                                {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
                            </div>
                        ) : (
                            <ConnectWallet onConnect={handleConnect} />
                        )}
                    </div>
                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-800 py-4 px-4">
                        <a href="#" className="block py-2 text-gray-300 hover:text-white transition duration-300">Explore</a>
                        <a href="#" className="block py-2 text-gray-300 hover:text-white transition duration-300">Create</a>
                        {walletAddress ? (
                            <div className="py-2 font-mono bg-gray-700 px-3 rounded-full text-sm inline-block mt-2">
                                {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
                            </div>
                        ) : (
                            <div className="py-2">
                                <ConnectWallet onConnect={handleConnect} />
                            </div>
                        )}
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Discover, Collect, and Sell Extraordinary NFTs
                </h2>
                <p className="text-xl text-gray-300 mb-8">Explore the decentralized world of digital art and collectibles</p>
                <div className="relative max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search NFTs..."
                        className="w-full px-6 py-3 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <Search className="absolute right-4 top-3 text-gray-400" />
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <h3 className="text-2xl font-semibold mb-8 text-center">Featured NFTs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nfts.map((nft) => (
                        <div key={nft.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold mb-2">{nft.name}</h4>
                                <p className="text-sm text-gray-400 mb-4">by {nft.creator}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-purple-400 font-bold">{nft.price}</span>
                                    <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">About NFT Nexus</h3>
                            <p className="text-gray-400">We are a leading NFT marketplace, connecting artists and collectors in the digital world.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Discord</a>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2023 NFT Nexus. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}