import type{ Metadata } from "next";

export const metadata:Metadata= {
 title: 'SEO Title',
 description: 'SEO Descripcion',
 keywords:['About Page','info','otro','...']
};

export default function AboutPage(){
    return(
        
        
        <span className="text-7xl ">About  page</span>
        
    )
}