// 'use client';

// import React from 'react';

// type AnyNode = any;

// interface Props {
//   content: AnyNode; // accept JSON or string
// }

// const ContentRenderer: React.FC<Props> = ({ content }) => {
//   // If content is HTML string, render directly
//   if (typeof content === 'string') {
//     return <div dangerouslySetInnerHTML={{ __html: content }} />;
//   }

//   // If content is wrapped, like { data: [...]} or { content: [...] }
//   const nodes: AnyNode[] = Array.isArray(content)
//     ? content
//     : Array.isArray(content.data)
//     ? content.data
//     : Array.isArray(content.content)
//     ? content.content
//     : [];

//   const renderNode = (node: AnyNode, idx: number): React.ReactNode => {
//     if (!node || typeof node !== 'object') return null;

//     const children = (
//       node.children ||
//       node.content ||
//       node.data?.children ||
//       []
//     ).map((child: any, i: number) => renderNode(child, i));

//     const text = node.text ?? node.value ?? undefined;

//     // Identify heading types
//     if (node.type?.startsWith('heading') || node.type?.match(/^h[1-6]$/i)) {
//       const level = node.level || parseInt(node.type?.[1]) || 2;
//       const Tag = `h${level}` as keyof JSX.IntrinsicElements;
//       return <Tag key={idx}>{children.length ? children : text}</Tag>;
//     }

//     // Paragraph
//     if (node.type === 'paragraph' || node.type === 'p' || node.nodeName === 'p') {
//       return <p key={idx}>{children.length ? children : text}</p>;
//     }

//     // Lists
//     if (node.type === 'unordered-list' || node.type === 'ul' || node.nodeName === 'UL') {
//       return <ul key={idx}>{children}</ul>;
//     }
//     if (node.type === 'ordered-list' || node.type === 'ol' || node.nodeName === 'OL') {
//       return <ol key={idx}>{children}</ol>;
//     }

//     if (node.type === 'list-item' || node.type === 'li' || node.nodeName === 'LI') {
//       return <li key={idx}>{children.length ? children : text}</li>;
//     }

//     // Blockquote
//     if (node.type === 'blockquote' || node.nodeName === 'BLOCKQUOTE' || node.type === 'quote') {
//       return <blockquote key={idx}>{children.length ? children : text}</blockquote>;
//     }

//     // Link
//     if (node.type === 'link' || node.type === 'a' || node.nodeName === 'A') {
//       const url = node.url || node.href || node.data?.url;
//       return (
//         <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
//           {children.length ? children : text}
//         </a>
//       );
//     }

//     // Code block or inline
//     if (node.type === 'code' || node.nodeName === 'CODE' || node.nodeName === 'PRE') {
//       const contentText = children.length ? children : text;
//       if (node.nodeName === 'PRE') {
//         return <pre key={idx}>{contentText}</pre>;
//       }
//       return <code key={idx}>{contentText}</code>;
//     }

//     // Image
//     const src = node.src || node.data?.src || node.data?.file?.url;
//     if (node.type === 'image' || node.nodeName === 'IMG' || src) {
//       return <img key={idx} src={src} alt={node.alt || node.data?.alt || ''} style={{ maxWidth: '100%' }} />;
//     }

//     // Text node
//     if (typeof text === 'string') {
//       return <React.Fragment key={idx}>{text}</React.Fragment>;
//     }

//     // Fallback: render children if any
//     return <React.Fragment key={idx}>{children}</React.Fragment>;
//   };

//   return <div>{nodes.map(renderNode)}</div>;
// };

// export default ContentRenderer;
