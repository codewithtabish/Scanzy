'use client';

import React from 'react';

type TextNode = {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
};

type Node = {
  type: string;
  level?: number;
  url?: string;
  children?: (TextNode | Node)[];
  src?: string;
  alt?: string;
};

interface Props {
  content: Node[];
}

const ContentRenderer: React.FC<Props> = ({ content }) => {
  const renderText = (node: TextNode, i: number): React.ReactNode => {
    let text: React.ReactNode = node.text;

    if (node.bold) text = <strong key={i}>{text}</strong>;
    if (node.italic) text = <em key={i}>{text}</em>;
    if (node.underline) text = <u key={i}>{text}</u>;
    if (node.code) text = <code key={i} className="bg-gray-100 px-1 rounded">{text}</code>;

    return text;
  };

  const renderNode = (node: Node | TextNode, index: number): React.ReactNode => {
    if (node.type === 'text') return renderText(node, index);

    const children = node.children?.map((child, i) => renderNode(child, i)) || null;

    switch (node.type) {
      case 'heading':
        if (node.level === 1) return <h1 key={index} className="text-4xl font-bold text-gray-900 my-4">{children}</h1>;
        if (node.level === 2) return <h2 key={index} className="text-3xl font-semibold text-gray-800 my-3">{children}</h2>;
        if (node.level === 3) return <h3 key={index} className="text-2xl font-medium text-gray-700 my-2">{children}</h3>;
        return <h4 key={index} className="text-xl font-medium text-gray-600 my-2">{children}</h4>;
      case 'paragraph':
        return <p key={index} className="my-3 text-gray-700 leading-relaxed">{children}</p>;
      case 'quote':
        return <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">{children}</blockquote>;
      case 'unordered-list':
        return <ul key={index} className="list-disc pl-6 my-3 text-gray-700">{children}</ul>;
      case 'ordered-list':
        return <ol key={index} className="list-decimal pl-6 my-3 text-gray-700">{children}</ol>;
      case 'list-item':
        return <li key={index}>{children}</li>;
      case 'link':
        return (
          <a
            key={index}
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            {children}
          </a>
        );
      case 'code':
        return (
          <pre key={index} className="bg-gray-900 text-white text-sm p-4 rounded my-3 overflow-x-auto">
            <code>{(node.children?.[0] as TextNode)?.text}</code>
          </pre>
        );
      case 'image':
        return (
          <img
            key={index}
            src={node.src || ''}
            alt={node.alt || ''}
            className="my-6 w-full max-w-2xl rounded shadow-md"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-100">
      {content?.map((node, index) => renderNode(node, index))}
    </div>
  );
};

export default ContentRenderer;
