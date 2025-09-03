'use client';

import { useState } from 'react';
import { Bell, Search, User, Settings, LogOut, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockProperties } from '@/lib/mock-data';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [selectedProperty, setSelectedProperty] = useState(mockProperties[0]);
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <header className={`bg-card border-b border-border px-6 py-4 shadow-sm ${className}`}>
      <div className="flex items-center justify-between">
        {/* Left side - Property selector and search */}
        <div className="flex items-center space-x-4">
          {/* Property Selector */}
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setShowPropertyDropdown(!showPropertyDropdown)}
              className="flex items-center space-x-2"
            >
              <Building2 className="h-4 w-4" />
              <span>{selectedProperty.name}</span>
            </Button>
            
            {showPropertyDropdown && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-popover border border-border rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                    Switch Property
                  </div>
                  {mockProperties.map((property) => (
                    <button
                      key={property.id}
                      onClick={() => {
                        setSelectedProperty(property);
                        setShowPropertyDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm hover:bg-accent ${
                        selectedProperty.id === property.id ? 'bg-primary/10 text-primary' : 'text-foreground'
                      }`}
                    >
                      <div className="font-medium">{property.name}</div>
                      <div className="text-xs text-muted-foreground">{property.address}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-input bg-background rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side - Notifications and user menu */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User Menu */}
          <div className="relative">
            <Button
              variant="ghost"
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="hidden md:block">John Doe</span>
            </Button>

            {showUserDropdown && (
              <div className="absolute top-full right-0 mt-1 w-48 bg-popover border border-border rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-foreground hover:bg-accent flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-foreground hover:bg-accent flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </button>
                  <hr className="my-2" />
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-foreground hover:bg-accent flex items-center space-x-2">
                    <LogOut className="h-4 w-4" />
                    <span>Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
