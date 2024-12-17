import React from 'react';
import { File, X, Download, Eye } from 'lucide-react';
import { EventDocument } from '../../../../../types/event';
import { formatFileSize } from '../../../../../utils/format';

interface DocumentListProps {
  documents: EventDocument[];
  onDocumentsChange: (documents: EventDocument[]) => void;
  error?: string;
}

export default function DocumentList({
  documents,
  onDocumentsChange,
  error,
}: DocumentListProps) {
  const removeDocument = (id: string) => {
    onDocumentsChange(documents.filter(doc => doc.id !== id));
  };

  const getFileIcon = (type: string) => {
    // You could expand this with more specific icons based on file type
    return <File className="w-5 h-5" />;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Typography variant="h3">Uploaded Documents</Typography>
        {documents.length > 0 && (
          <p className="text-sm text-gray-500">
            {documents.length} document{documents.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg">
              {getFileIcon(doc.type)}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{doc.name}</h3>
              <p className="text-sm text-gray-500">
                {formatFileSize(doc.size)} • {new Date(doc.uploadDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => {/* Implement preview */}}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
              title="Preview"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => {/* Implement download */}}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
              title="Download"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => removeDocument(doc.id)}
              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
              title="Remove"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}

      {documents.length === 0 && (
        <div className="text-center py-8 px-4 bg-gray-50 rounded-lg">
          <File className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">No documents uploaded</p>
          <p className="text-sm text-gray-500 mt-1">
            Upload documents using the drag and drop area above
          </p>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}