
GNOME Shell, used on Ubuntu etc, has an application icon bar. If you're a computer programmer you might want to put a traffic light icon on this icon bar to indicate whether your build is OK, broken, or is currently building or otherwise in an indeterminate state.  This program can help with that.

You need a small file somewhere to store the build state. The contents of the file need to start with either 'ok' (which gives a green icon), 'broken' (which gives a red icon), or anything else (which gives a yellow icon - use this for currently building).

TO RUN:

	npm start 'your/path/to/BUILD_STATUS_FILE'   
  
