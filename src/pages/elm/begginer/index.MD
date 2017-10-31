## The Elm Architecture

The Elm Architecture is a simple pattern for architecting webapps. It is great for modularity, code reuse, and testing. Ultimately, it makes it easy to create complex web apps that stay healthy as you refactor and add features.

This architecture seems to emerge naturally in Elm. We first observed it in the games the Elm community was making. Then in web apps like TodoMVC and dreamwriter too. Now we see it running in production at companies like NoRedInk and Pivotal. The architecture seems to be a consequence of the design of Elm itself, so it will happen to you whether you know about it or not. This has proven to be really nice for onboarding new developers. Their code just turns out well-architected. It is kind of spooky.

So The Elm Architecture is easy in Elm, but it is useful in any front-end project. In fact, projects like Redux have been inspired by The Elm Architecture, so you may have already seen derivatives of this pattern. Point is, even if you ultimately cannot use Elm at work yet, you will get a lot out of using Elm and internalizing this pattern.

### The Basic Pattern

The logic of every Elm program will break up into three cleanly separated parts:

Model — the state of your application
Update — a way to update your state
View — a way to view your state as HTML
This pattern is so reliable that I always start with the following skeleton and fill in details for my particular case.

```elm
import Html exposing (..)


-- MODEL

type alias Model = { ... }


-- UPDATE

type Msg = Reset | ...

update : Msg -> Model -> Model
update msg model =
  case msg of
    Reset -> ...
    ...


-- VIEW

view : Model -> Html Msg
view model =
  ...
```

That is really the essence of The Elm Architecture! We will proceed by filling in this skeleton with increasingly interesting logic.
