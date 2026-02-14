import { LiveProvider, LivePreview, LiveError } from 'react-live';
import React, { useState } from 'react';

// 1. IMPORT components (Adjust paths to match your project)
import { Navbar } from '../library/Navbar';
import { Hero } from '../library/Hero';
import { Section } from '../library/section';
import { Card } from '../library/Card';
import { Button } from '../library/Button';
import { Table } from '../library/Table';
import { Input } from '../library/Input';

// 2. DEFINE the scope (The AI needs these to render the code)
const scope = { 
  Navbar, 
  Hero, 
  Section, 
  Card, 
  Button, 
  Table, 
  Input, 
  React,
  useState 
};

export const LiveRunner = ({ code }: { code: string }) => {
  return (
    <LiveProvider code={code} scope={scope} noInline={false}>
      <div className="h-full w-full bg-white overflow-hidden flex flex-col">
        
        <div 
          className="flex-1 overflow-y-auto relative bg-white"
          style={{ 
            isolation: 'isolate', 
            transform: 'translate(0, 0)' 
          }}
        >
          <LivePreview />
        </div>

        <LiveError className="p-4 bg-red-600 text-white font-mono text-[10px]" />
      </div>
    </LiveProvider>
  );
};