import { AlertCircle, Upload, X } from 'lucide-react'
import React, { useState } from 'react'

const CreateNFT = () => {
    const [file, setFile] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
    })
    const [error, setError] = useState(null)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile && selectedFile.type.substr(0, 6) === "image/") {
            setFile(selectedFile)
        } else {
            setFile(null)
            setError("Please select an image file.")
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the data to your backend or smart contract
        console.log("Form submitted", { ...formData, file })
        // Reset form after submission
        setFormData({ name: '', description: '', price: '' })
        setFile(null)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            {/* Header */}
            <header className="bg-gray-900 shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        RAI Nexus
                    </h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Create Your NFT
                </h2>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
                    {/* File Upload */}
                    <div className="mb-6">
                        <label className="block text-gray-300 mb-2" htmlFor="file">
                            Upload Image
                        </label>
                        <div className="relative border-2 border-dashed border-gray-600 rounded-lg p-4">
                            <input
                                type="file"
                                id="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="text-center">
                                {file ? (
                                    <div className="flex items-center justify-center">
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt="Preview"
                                            className="max-h-48 rounded"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setFile(null)}
                                            className="ml-2 text-red-500 hover:text-red-600"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-gray-400">
                                        <Upload size={48} className="mx-auto mb-2" />
                                        <p>Drag and drop an image, or click to select</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Name Input */}
                    <div className="mb-6">
                        <label className="block text-gray-300 mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter NFT name"
                        />
                    </div>

                    {/* Description Input */}
                    <div className="mb-6">
                        <label className="block text-gray-300 mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            rows="4"
                            placeholder="Describe your NFT"
                        ></textarea>
                    </div>

                    {/* Price Input */}
                    <div className="mb-6">
                        <label className="block text-gray-300 mb-2" htmlFor="price">
                            Price (ETH)
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                            min="0"
                            step="0.01"
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter price in ETH"
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 text-red-500 flex items-center">
                            <AlertCircle className="mr-2" />
                            {error}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Create NFT
                    </button>
                </form>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2023 NFT Nexus. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default CreateNFT