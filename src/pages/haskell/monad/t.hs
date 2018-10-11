justH :: Maybe Char
justH = do  
    (x:xs) <- Just ""  
    return x
