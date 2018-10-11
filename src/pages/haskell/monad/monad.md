---
title: Monad
---

# Monad Laws



# Maybe Monad

```haskell
justHead :: Maybe Char
justHead = do  
    (x:xs) <- Just ""  
    return x
```

# List Monad



