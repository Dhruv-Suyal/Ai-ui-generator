import { Button } from './Button';
import { Card } from './Card';
import { Input } from './Input';
import { Navbar } from './Navbar';
import { Table } from './Table';
import { Hero } from './Hero';      // Added
import { Section } from './section'; // Added

export const Library = {
  Button,
  Card,
  Input,
  Table,
  Navbar,
  Hero,
  Section
};

export type ComponentName = keyof typeof Library;