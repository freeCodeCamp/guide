# Logical Operators

#### And (&&)
```csharp
bool a = true;
bool b = true;

(a && b) returns true
-----------------------------
bool a = true;
bool b = false;

(a && b) returns false
```

#### Or (||)
```csharp
bool a = true;
bool b = true;

(a || b) returns true
-----------------------------
bool a = true;
bool b = false;

(a || b) returns true
```

#### Not (!)
```csharp
bool a = true;
bool b = true;

!(a && b) returns false
-----------------------------
bool a = true;
bool b = false;

!(a && b) returns true
```
