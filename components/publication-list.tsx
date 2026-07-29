"use client";
import { useMemo, useState } from "react";
import { PublicationCard } from "./cards";
import type { Publication, PublicationType } from "@/types";
const filters:[string,PublicationType|"All"][]=[["All","All"],["Journal articles","Journal article"],["Conference papers","Conference paper"],["Under review","Under review"],["Working papers","Working paper"]];
export function PublicationList({items}:{items:Publication[]}){const [active,setActive]=useState<PublicationType|"All">("All");const records=useMemo(()=>active==="All"?items:items.filter(i=>i.type===active),[active,items]);return <><div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:28}}>{filters.map(([label,value])=><button className="button button-secondary" style={{background:active===value?"var(--navy)":undefined,color:active===value?"white":undefined}} key={value} onClick={()=>setActive(value)}>{label}</button>)}</div><div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))"}}>{records.map(item=><PublicationCard key={item.id} item={item}/>)}</div></>}
