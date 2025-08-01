import React, { useState, useEffect, useRef } from 'react';

interface CanvasProps {
  width: number;
  height: number;
  onShapeAdd?: (shape: Shape) => void;
}

// @dev: This is a comment
/**
 * This is a comment
 * This is another comment
 * This is a third comment
 * This is a fourth comment
 */
interface Shape {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'rectangle' | 'circle' | 'triangle';
  color: string;
}

// @dev: This component handles the main canvas functionality for the shape editor
// @dev: This is a comment
// This is another comment
const Canvas: React.FC<CanvasProps> = ({ width, height, onShapeAdd }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // @hideable: Initialize canvas context and set up event listeners
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // @dev: Clear canvas and redraw all shapes
    const drawShapes = () => {
      ctx.clearRect(0, 0, width, height);
      
      shapes.forEach(shape => {
        ctx.fillStyle = shape.color;
        
        switch (shape.type) {
          case 'rectangle':
            ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
            break;
          case 'circle':
            ctx.beginPath();
            ctx.arc(shape.x + shape.width/2, shape.y + shape.height/2, shape.width/2, 0, 2 * Math.PI);
            ctx.fill();
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(shape.x + shape.width/2, shape.y);
            ctx.lineTo(shape.x, shape.y + shape.height);
            ctx.lineTo(shape.x + shape.width, shape.y + shape.height);
            ctx.closePath();
            ctx.fill();
            break;
        }
      });
    };

    drawShapes();
  }, [shapes, width, height]);

  // @hideable: Handle mouse events for shape selection and dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if clicking on a shape
    const clickedShape = shapes.find(shape => 
      x >= shape.x && x <= shape.x + shape.width &&
      y >= shape.y && y <= shape.y + shape.height
    );

    if (clickedShape) {
      setSelectedShape(clickedShape.id);
      setIsDragging(true);
      setDragStart({ x: x - clickedShape.x, y: y - clickedShape.y });
    } else {
      setSelectedShape(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging || !selectedShape) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setShapes(prev => prev.map(shape => 
      shape.id === selectedShape 
        ? { ...shape, x: x - dragStart.x, y: y - dragStart.y }
        : shape
    ));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // @dev: Add a new shape to the canvas
  const addShape = (type: Shape['type']) => {
    const newShape: Shape = {
      id: `shape-${Date.now()}`,
      x: Math.random() * (width - 100),
      y: Math.random() * (height - 100),
      width: 50 + Math.random() * 50,
      height: 50 + Math.random() * 50,
      type,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`
    };

    setShapes(prev => [...prev, newShape]);
    onShapeAdd?.(newShape);
  };

  return (
    <div className="canvas-container">
      <div className="toolbar">
        <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
        <button onClick={() => addShape('circle')}>Add Circle</button>
        <button onClick={() => addShape('triangle')}>Add Triangle</button>
      </div>
      
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ border: '1px solid #ccc', cursor: isDragging ? 'grabbing' : 'grab' }}
      />
      
      {/* @hideable: Display shape count and selected shape info */}
      <div className="info-panel">
        <p>Total Shapes: {shapes.length}</p>
        {selectedShape && (
          <p>Selected: {selectedShape}</p>
        )}
      </div>
    </div>
  );
};

export default Canvas; 