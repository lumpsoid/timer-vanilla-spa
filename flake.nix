{
  description = "Dev timer qwik spa ts";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        yarn
      ];
      shellHook = ''
        session="timer-qwik-spa"
        sessionExist=$(tmux list-sessions | grep $session)

        if [ "$sessionExist" != "" ]; then
            tmux kill-session -t $session
        fi
        window=0

        tmux -L $session new-session -d -s $session

        # Set tmux options
        tmux -L $session set -g mouse on
        tmux -L $session set -g mouse-select-window on

        # Create the first window and run nvim
        #tmux -L $session send-keys -t $session 'nvim ./lib' C-m

        # Split the window and run flutter
        #tmux -L $session split-window -v -t $session:0.0
        #tmux -L $session send-keys -t $session 'flutter run --flavor development --target ./lib/main_development.dart --debug' C-m

        # Select the first pane
        tmux -L $session select-pane -t 0

        # Attach to the session
        tmux -L $session attach-session -t $session
      '';
    };
  };
}

