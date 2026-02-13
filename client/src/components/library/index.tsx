import { Button } from './Button';
import { Card } from './Card';
import { Input } from './Input';
import { Navbar } from './Navbar';
import { Table } from './table';


export const Library = {
  Button,
  Card,
  Input,
  Table,
  Navbar,
};

// This helps your code-generation logic know what's available
export type ComponentName = keyof typeof Library;