// Small, memory-only cache. Explicit refresh always bypasses it.
export function createDataClient({fetcher=fetch,now=Date.now,ttlMs=300000,maxEntries=16}={}) {
  const cache=new Map();
  return async function request(url,signal,{force=false}={}) {
    if(signal?.aborted)throw new DOMException('Request aborted','AbortError');
    const hit=cache.get(url);
    if(!force&&hit&&now()-hit.at>=0&&now()-hit.at<ttlMs)return hit.data;
    const response=await fetcher(url,{signal});
    if(!response.ok)throw Error('บริการข้อมูลตอบกลับไม่สำเร็จ ('+response.status+')');
    const data=await response.json();
    if(signal?.aborted)throw new DOMException('Request aborted','AbortError');
    cache.delete(url);cache.set(url,{data,at:now()});
    while(cache.size>maxEntries)cache.delete(cache.keys().next().value);
    return data;
  };
}
