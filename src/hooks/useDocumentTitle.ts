import { useEffect } from 'react';
import { institute } from '@/data/site';

/** Sets <title> per page: "Page | Amaltas Institute of Paramedical Sciences, Dewas". */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${institute.pageTitle}` : institute.pageTitle;
  }, [title]);
}
