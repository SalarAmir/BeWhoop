import React, { useState, useCallback } from 'react';
import { Plus, UploadCloud, Trash2 } from 'lucide-react';
// CORRECTED PATH: Using the '@' alias.
import { initialFiles } from '@/data/mockData';

const CreateEvent = () => {
    const [files, setFiles] = useState(initialFiles);
    const [isTicketed, setIsTicketed] = useState(false);

    const handleFileDrop = useCallback((event) => {
        event.preventDefault(); event.stopPropagation();
        const droppedFiles = [...event.dataTransfer.files];
        const newFiles = droppedFiles.map(file => ({ name: file.name, size: `${(file.size / 1024 / 1024).toFixed(2)} MB`, preview: URL.createObjectURL(file) }));
        setFiles(prev => [...prev, ...newFiles]);
    }, []);

    const handleDragOver = useCallback((event) => { event.preventDefault(); event.stopPropagation(); }, []);
    
    const handleFileChange = (event) => {
        const selectedFiles = [...event.target.files];
        const newFiles = selectedFiles.map(file => ({ name: file.name, size: `${(file.size / 1024 / 1024).toFixed(2)} MB`, preview: URL.createObjectURL(file) }));
        setFiles(prev => [...prev, ...newFiles]);
    };

    const removeFile = (indexToRemove) => setFiles(files.filter((_, index) => index !== indexToRemove));

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Create an Event</h2>
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
                    <div><h3 className="text-xl font-semibold text-gray-800">Event Title</h3><p className="text-gray-500 mt-1">Add a Tagline</p></div>
                    <button className="bg-red-100 text-red-500 rounded-full p-3 hover:bg-red-200 transition-colors"><Plus size={24} /></button>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Photos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center h-64" onDrop={handleFileDrop} onDragOver={handleDragOver}>
                            <div className="bg-gray-100 rounded-full p-4"><UploadCloud size={32} className="text-gray-500" /></div>
                            <p className="mt-4 font-semibold text-gray-700">Drag File here</p><p className="text-gray-500">or</p>
                            <label htmlFor="file-upload" className="cursor-pointer mt-2 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors">Upload Files</label>
                            <input id="file-upload" type="file" className="hidden" multiple onChange={handleFileChange} /><p className="text-xs text-gray-400 mt-4">pdf, jpgs, pngs, videos, mp3</p>
                        </div>
                        <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                            {files.map((file, index) => (
                                <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <img src={file.preview} alt="preview" className="w-12 h-12 rounded-md object-cover mr-4" />
                                    <div className="flex-1"><p className="font-semibold text-sm text-gray-800">{file.name}</p><p className="text-xs text-gray-500">{file.size}</p></div>
                                    <button onClick={() => removeFile(index)} className="text-gray-400 hover:text-red-500"><Trash2 size={20} /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-xs text-gray-400 mt-4 text-center md:text-left">Recommended image size: 2160 x 1080px &nbsp; Maximum file size: 10MB &nbsp; Supported image files: .JPEG, .PNG</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-800">Ticketed?</h3>
                    <label htmlFor="ticketed-toggle" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="ticketed-toggle" className="sr-only" checked={isTicketed} onChange={() => setIsTicketed(!isTicketed)} />
                            <div className={`block w-14 h-8 rounded-full transition-colors ${isTicketed ? 'bg-red-500' : 'bg-gray-300'}`}></div>
                            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isTicketed ? 'transform translate-x-6' : ''}`}></div>
                        </div>
                    </label>
                </div>
            </div>
            <div className="mt-8 flex justify-end"><button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Next</button></div>
        </div>
    );
};

export default CreateEvent;
