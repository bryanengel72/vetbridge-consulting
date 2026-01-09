
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-secondary rounded-full flex items-center justify-center">
               <span className="text-brand-primary font-bold text-lg">V</span>
            </div>
            <h1 className="font-bold text-brand-primary leading-none text-lg">
              VETBRIDGE<br/>
              <span className="text-brand-secondary text-[10px] tracking-widest uppercase">Consulting</span>
            </h1>
          </div>
          
          <div className="text-sm text-slate-500 text-center md:text-right">
            <p>© {new Date().getFullYear()} VetBridge Consulting. All rights reserved.</p>
            <p className="mt-1 font-medium text-brand-primary">Healthcare Technology Expertise Meets Veterinary Practice Excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
