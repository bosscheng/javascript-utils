let pipe = (first, ...cbs) => cbs.reduce((aac, c) => c(aac), first);
