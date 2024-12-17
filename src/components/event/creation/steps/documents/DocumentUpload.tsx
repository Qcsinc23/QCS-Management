import React, { useCallback } from 'react';
import { Upload, File } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { EventDocument } from '../../../../../types/event';

interface DocumentUploadProps {
  onUpload: (files: EventDocument[]) => void;
}

export default function DocumentUpload({ onUpload }: DocumentUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newDocs: EventDocument[] = acceptedFiles.map(file => ({
      id: Date.now().toString(),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadDate: new Date().toISOString(),
      status: 'uploaded',
    }));
    
    onUpload(newDocs);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxSize: 5242880, // 5MB
  });

  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
        transition-colors
        ${isDragActive 
          ? 'border-orange-500 bg-orange-50' 
          : 'border-gray-300 hover:border-gray-400'
        }
      `}
    >
      <input {...getInputProps()} />
      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
      
      <div className="space-y-2">
        <p className="text-gray-600">
          {isDragActive
            ? 'Drop the files here...'
            : 'Drag and drop files here, or click to select files'
        }
        </p>
        <p className="text-sm text-gray-500">
          Supported formats: PDF, DOC, DOCX, PNG, JPG (max 5MB)
        </p>
      </div>
    </div>
  );
}